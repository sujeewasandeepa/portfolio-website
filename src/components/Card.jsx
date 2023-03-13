export default function Card({ title, description, imageSrc, myRole, myRoleDesc, workList, link }) {
    return (
      <div className="bg-white rounded-lg shadow-md mx-5 pb-10 sm:flex sm:flex-col sm:items-center sm:pb-5 mt-5 min-w-200">
        <h1 className="text-4xl font-bold text-slate-500 my-5 hover:text-slate-800"><a href={link} target="_blank">{title}</a></h1>
        <img src={imageSrc} />
        <p>{description}</p>
        <h2>My role: {myRole}</h2>
        <p>{myRoleDesc}</p>
        <ul>
        {
          workList?.map((element, i) => (
            <li key={i}>{element}</li>
          ))
        }
        </ul>
      </div>
    );
  }
