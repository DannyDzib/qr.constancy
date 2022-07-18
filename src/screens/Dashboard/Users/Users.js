const Users = () => {
  console.log(Array(10).map((index) => index))
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-blue-900	">Usuarios</h1>
        <label for="table-search" class="sr-only">
          Search
        </label>
        <div class="relative">
          
          <input
            type="text"
            id="table-search-users"
            class="block p-2 pl-10 w-80 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search for users"
          />
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="py-3 px-6 text-blue-900">
                ID
              </th>
              <th scope="col" class="py-3 px-6">
                Nombre(s)
              </th>
              <th scope="col" class="py-3 px-6">
                Apellidos
              </th>
              <th scope="col" class="py-3 px-6">
                Estatus
              </th>
              <th scope="col" class="py-3 px-6">
                Correo
              </th>
              <th scope="col" class="py-3 px-6">
                Carrera
              </th>
              <th scope="col" class="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {new Array(10).fill("-").map((item, key) => (
              <tr
                class="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={key}
              >
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  1
                </th>
                <td class="py-4 px-6">Angel Daniel</td>
                <td class="py-4 px-6">Dzib Chan</td>
                <td class="py-4 px-6">En progreso</td>
                <td class="py-4 px-6">angel_95pl@hotmail.com</td>
                <td class="py-4 px-6">Ing Sistemas Computacionales</td>
                <td class="py-4 px-6">
                  <a
                    href="#"
                    class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Users
