import corbeille from "@assets/poubelle-de-recyclage.png";
import crayon from "@assets/crayon.png";

function Users() {
  return (
    <div className="flex flex-col items-center w-full xl:m-30 lg:m-20 sm:m-10 pt-10">
      <table className="min-w-full text-center">
        <thead className="border-b bg-gray-800">
          <tr>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              ID
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              Email
            </th>
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4"
            >
              Profil
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              1
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Mark
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              Otto
            </td>
            <td className="w-6">
              <button type="button" className="mr-1">
                <img src={corbeille} alt="corbeille" />
              </button>
            </td>
            <td className="w-6">
              <button type="button" className="ml-1">
                <img src={crayon} alt="corbeille" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Users;
