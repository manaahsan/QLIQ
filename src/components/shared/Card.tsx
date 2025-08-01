export const Card = (data: any) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 cursor-pointer">
      <img src={data.data.image} alt="pet" />
      <p className="mt-1">{data.data.name}</p>
    </div>
  );
};
