interface TeckstackItemProps {
  src: string;
  alt: string;
}

const SkillsItem: React.FC<TeckstackItemProps> = ({ src, alt }) => {
  return (
    <div className="rounded-2xl animate-pulse border-4 border-neutral-800 sm:p-6 p-3 sm:m-4 m-1 flex justify-center">
      <img src={src} alt={alt} />
    </div>
  );
};

export default SkillsItem;
