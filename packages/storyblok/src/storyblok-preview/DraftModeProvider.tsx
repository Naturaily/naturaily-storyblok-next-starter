'use client';

import { handleDisableDraftAction } from '#storyblok/storyblok-preview/handleDisableDraft';
import { isDraftMode } from '#storyblok/storyblok-preview/isDraftMode';
import { LoaderCircleIcon, MousePointerClickIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useMemo, createContext, ReactNode, useContext, useTransition } from 'react';

import { cn } from '@natu/utils/cn';

interface PreviewModeProviderProps {
  draftMode?: boolean;
  children?: ReactNode;
}

interface PreviewModeContextProps {
  draftMode: boolean;
}

const DraftModeContext = createContext<PreviewModeContextProps | undefined>(undefined);

/**
 * This is a TypeScript React function that provides a context for draft mode with a preview option.
 * @param {PreviewModeProviderProps} props - The `DraftModeProvider` component takes in two props:
 */
export const DraftModeProvider: React.FC<PreviewModeProviderProps> = ({
  children,
  draftMode = false,
}) => {
  const isDraftModeEnabled = isDraftMode(draftMode);
  const data = useMemo(() => ({ draftMode: isDraftModeEnabled }), [isDraftModeEnabled]);
  const { refresh } = useRouter();
  const [isPending, startTransition] = useTransition();

  const infoStyles = cn(
    'pointer-events-none absolute bottom-8 right-0 z-50 rounded bg-blue-500/90 p-2 opacity-0 shadow-lg shadow-blue-500/80',
    'transition-all group-hover:-translate-y-5 group-hover:opacity-100',
  );

  const handleOnClick = async () => {
    await handleDisableDraftAction();
    refresh();
  };

  return (
    <>
      <DraftModeContext value={data}>{children}</DraftModeContext>
      {isDraftModeEnabled && (
        <button
          disabled={isPending}
          onClick={() => startTransition(handleOnClick)}
          className="group fixed bottom-4 right-10 z-50 flex items-center gap-2 rounded bg-blue-500/90 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/80"
        >
          {isPending ? 'Loading...' : 'Draft mode!'}
          {isPending ? (
            <LoaderCircleIcon className="size-4 animate-spin" />
          ) : (
            <MousePointerClickIcon className="size-4" />
          )}
          <span className={infoStyles}>Clicking on the button will disable the draft mode</span>
        </button>
      )}
    </>
  );
};

export const useDraftModeContext = () => {
  const context = useContext(DraftModeContext);

  if (context === undefined) {
    throw new Error('Hook useDraftModeContext must be used within a DraftModeProvider component');
  }

  return context;
};
