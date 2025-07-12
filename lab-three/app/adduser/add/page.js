import { saveuser } from "@/app/_lib/actions";

export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <form
        className="bg-[#ffffff] dark:bg-gray-800 shadow-2xl rounded-xl p-8 w-full max-w-md"
        action={saveuser}
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 ">
          Add New User
        </h2>

        <div className="mb-5">
          <label
            htmlFor="title"
            className="block mb-2 text-sm font-medium text-gray-900 "
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            placeholder="Please Enter Todo Title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="status"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Status
          </label>
          <input
            type="text"
            id="status"
            name="status"
            required
            placeholder="Please Enter Todo Status"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  "
          />
        </div>

        <button
          type="submit"
          className="w-full text-white bg-red-800 hover:bg-red-900 
                     focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium 
                     rounded-lg text-sm px-5 py-2.5 text-center ">
          Add
        </button>
      </form>
    </div>
  );
}
