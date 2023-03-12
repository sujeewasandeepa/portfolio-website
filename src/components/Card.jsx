export default function Card({ title, description, imageSrc, myRole, myRoleDesc, workList, link }) {
    return (
      <div className="bg-white rounded-lg shadow-md mx-5 pb-10 sm:flex sm:flex-col sm:items-center sm:pb-5 mt-5">
        <img className="w-full object-cover mb-4 sm:w-1/2 sm:h-1/2" src={imageSrc} alt={title} />
        <div className="px-6">
          <h2 className="text-2xl font-bold mb-2 hover:underline"><a href={link}>{title}</a></h2>
          <p className="text-gray-700 text-base mb-4">{description}</p>
          <h3 className="text-1xl font-bold my-2">{myRole}</h3>
          <p className="text-gray-700 text-base mb-4">{myRoleDesc}</p>
          <ul className="text-gray-700 text-base mb-4 italic">
            {workList.map((item) => (
              <li className="" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
