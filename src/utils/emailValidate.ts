export const emailValidate = (email: string) => {
  const EMAIL_REGEXP
    = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  
  return EMAIL_REGEXP.test(email);
}
