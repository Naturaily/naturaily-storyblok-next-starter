'use client';

import { useRouter } from 'next/navigation';
import { useMemo, createContext, ReactNode, useContext, useTransition } from 'react';

import { cn } from '@natu/utils';

import { handleDisableDraft } from '../../actions/actions';
import { isDraftMode } from '../../utils/isDraftMode/isDraftMode';

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
 * @param {PreviewModeProviderProps}  - The `DraftModeProvider` component takes in two props:
 */
export const DraftModeProvider = ({ children, draftMode = false }: PreviewModeProviderProps) => {
  const isDraftModeEnabled = isDraftMode(draftMode);
  const data = useMemo(() => ({ draftMode: isDraftModeEnabled }), [isDraftModeEnabled]);
  const { refresh } = useRouter();
  const [isPending, startTransition] = useTransition();

  const infoStyles = cn(
    'absolute bottom-8 right-0 z-50 rounded bg-blue-500/90 p-2 opacity-0 shadow-lg shadow-blue-500/80 pointer-events-none',
    'transition-all group-hover:-translate-y-5 group-hover:opacity-100',
  );

  const handleOnClick = async () => {
    await handleDisableDraft();
    refresh();
  };

  return (
    <>
      <DraftModeContext.Provider value={data}>{children}</DraftModeContext.Provider>
      {isDraftModeEnabled && (
        <button
          onClick={() => startTransition(handleOnClick)}
          className="group fixed bottom-4 left-4 z-50 rounded bg-blue-500/90 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-blue-500/80"
        >
          {isPending ? 'Loading...' : 'Draft mode!'}
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
