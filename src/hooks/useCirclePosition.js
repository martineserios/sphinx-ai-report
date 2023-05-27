const useCirclePosition = (value) => {
  const position = value < 16 ? -622 + value * 57 : -614 + value * 57;

  return position;
};
export default useCirclePosition;
