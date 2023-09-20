import { Paper } from "./Paper";

interface PapersProps {
  papers: any[];
  currentLocation: number;
  isOpenBook: "close" | "open" | null;

}

export const Book: React.FC<PapersProps> = ({
  papers,
  currentLocation,
  isOpenBook,

}): JSX.Element => {
  return (
    <div
      id="book"
      className={`book ${
        currentLocation >= 1 &&
        currentLocation !== papers.length &&
        " translate-x-[50%]"
      } ${
        currentLocation === papers.length && "translate-x-[100%]"
      }  relative transition-transform duration-500 w-[600px] h-[700px]`}>
      {papers.map((item, index) => (
        <Paper
          currentLocation={currentLocation}
          key={item}
          paperLength={papers.length}
          index={index}
        />
      ))}
    </div>
  );
};
