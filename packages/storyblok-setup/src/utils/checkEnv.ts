const styles = {
  success: {open: '\u001b[32;1m', close: '\u001b[0m'},
  danger: {open: '\u001b[31;1m', close: '\u001b[0m'},
  info: {open: '\u001b[36;1m', close: '\u001b[0m'},
  subtitle: {open: '\u001b[2;1m', close: '\u001b[0m'},
}

type Color =  keyof typeof styles; 

const color = (modifier:Color, string:string) =>  styles[modifier].open + string + styles[modifier].close

/**
 * The function checks if the required environment variables STORYBLOK_SPACE_ID and
 * STORYBLOK_PERSONAL_ACCESS_TOKEN are set and returns true if they are, otherwise it logs an error
 * message and returns false.
 * @returns The function `checkEnv` returns a boolean value. It returns `true` if both
 * `process.env.STORYBLOK_SPACE_ID` and `process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN` are truthy
 * values. Otherwise, it returns `false`.
 */
export const checkEnv = () => {
  console.log(color('info', '▶️ Starting to check the correctness of environmental variables'));
 
  if(!process.env.STORYBLOK_SPACE_ID || !process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN) {
    console.error(color('danger', '🚨  The environmental variables are incorrect.'));
    console.table({
      STORYBLOK_SPACE_ID: process.env.STORYBLOK_SPACE_ID,
      STORYBLOK_PERSONAL_ACCESS_TOKEN: process.env.STORYBLOK_PERSONAL_ACCESS_TOKEN,
    });
        
    return false
  }

  console.log(color('success', '✅  The environmental variables are correct.'));
  
  return true
}