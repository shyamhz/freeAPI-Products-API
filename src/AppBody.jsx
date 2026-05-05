import CardImage from "./components/content-card";

const AppBody = ({ CardObjectList, className }) => {
  return (
    <div className={className}>
      {CardObjectList.map((cardObject) => (
        <CardImage key={cardObject.id} {...cardObject} />
      ))}
    </div>
  );
};

export default AppBody;
