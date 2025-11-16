const Card = ({ children, title }) => {
  return (
    <div class='m-2 max-w-sm min-w-1/4 min-h-full rounded overflow-hidden shadow-lg bg-white text-black'>
      <div class='px-6 py-2'>
        <div class='font-bold text-xl mb-2'>{title}</div>
      </div>
      <div class='px-6 pt-4 pb-2'>{children}</div>
    </div>
  );
};

export default Card;
