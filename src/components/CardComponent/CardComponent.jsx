const CardComponent = ({ teacher }) => {
  const { name, surname, languages, lesson_info, conditions } = teacher || {};

  return (
    <>
      <h2 className="text-[24px] leading-[1] font-medium text-primary-text-color mb-[32px]">
        {name} {surname}
      </h2>

      <ul className="flex flex-col gap-[8px] text-[16px] mb-[16px] leading-[1.5] font-medium text-primary-text-color">
        <li>
          <p>
            <span className="text-card-text-color">Speaks: </span>
            <span className="underline"> {languages?.join(', ')}</span>
          </p>
        </li>
        <li>
          <p>
            <span className="text-card-text-color">Lesson Info: </span>
            {lesson_info}
          </p>
        </li>
        <li>
          {' '}
          <p>
            <span className="text-card-text-color">Conditions: </span>
            {conditions.map((condition) => {
              return condition + ' ';
            })}
          </p>
        </li>
      </ul>
    </>
  );
};

export default CardComponent;
