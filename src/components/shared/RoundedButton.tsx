interface IRoundedButton {
  buttonText: string;
}

function RoundedButton({ buttonText }: IRoundedButton) {
  return (
    <div className="flex w-fit items-center gap-x-2 rounded-full bg-secondary px-4 py-3">
      <div className="size-3 rounded-full bg-primary"></div>
      <div>{buttonText}</div>
    </div>
  );
}

export default RoundedButton;
