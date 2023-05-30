import { instansiData } from "@/data/main-page/instansiData";

export default function InstansiList() {
  return (
    <div>
      <h2 className="mb-2 text-lg font-semibold text-slate-700 dark:text-white">
        Instansi :
      </h2>
      <ul className="max-w-md space-y-1 text-slate-500 list-inside dark:text-slate-400">
        {instansiData.map((e, i) => (
          <li
            className="flex items-center"
            key={i}>
            <svg
              className="w-4 h-4 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"></path>
            </svg>
            {e}
          </li>
        ))}
      </ul>
    </div>
  )
}