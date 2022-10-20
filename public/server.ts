const getActiveUserEmail = (count: number): string => {
  const abs = Math.abs(Math.round(count));
  const email = Session.getActiveUser().getEmail();
  return '<'.repeat(abs) + email + '>'.repeat(abs);
}

export { getActiveUserEmail }
