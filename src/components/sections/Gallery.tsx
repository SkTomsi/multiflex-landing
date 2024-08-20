import RoundedButton from '../shared/RoundedButton';

export function Gallery() {
  return (
    <div className="container flex flex-col items-center">
      <div className="flex flex-col items-center gap-y-2">
        <div className=" text-lg font-medium text-primary">
          Crafted with tradition and &#x2661;
        </div>
        <RoundedButton buttonText="Our Gallery" />
      </div>
    </div>
  );
}
