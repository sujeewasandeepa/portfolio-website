export default function Card({ title, description, imageSrc, myRole, myRoleDesc, workList, link }) {
    return (
      <div className="bg-white text-slate-700 rounded-lg shadow-md mx-5 pb-10 sm:pb-5 mt-5 min-w-200 px-5">
        <h1 className="text-4xl font-bold text-slate-500 my-5 hover:text-slate-800"><a href={link} target="_blank">{title}</a></h1>
        <img src={imageSrc} />
        <p className="my-3">{description}</p>
        <h2 className="my-2"><span className="font-bold">My Role: </span>{myRole}</h2>
        <p className="italic mb-2">{myRoleDesc}</p>
        <ul className="ml-4 list-disc">
        {
          workList?.map((element, i) => (
            <li key={i}>{element}</li>
          ))
        }
        </ul>
      </div>
    );
  }
