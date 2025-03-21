/* import { FaEthereum } from "react-icons/fa";
import Identicon from "react-identicons";
import Moment from "react-moment";
import { truncate } from "../../store";

const ProjectBackers = ({ backers }) => {
  return (
    <div className="flex flex-col justify-center items-start md:w-2/3 px-6 mx-auto">
      <div
        className="max-h-[calc(100vh_-_25rem)] overflow-y-auto
        shadow-md rounded-md w-full mb-10"
      >
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Backer
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Donations
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Refunded
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {backers.map((backer, i) => (
              <Backer key={i} backer={backer} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Backer = ({ backer }) => (
  <tr className="border-b border-gray-200">
    <td
      className="text-sm font-light
      px-6 py-4 whitespace-nowrap"
    >
      <div className="flex justify-start items-center space-x-2">
        <Identicon
          className="h-10 w-10 object-contain rounded-full shadow-md"
          string={backer.owner}
          size={25}
        />
        <span>{truncate(backer.owner, 4, 4, 11)}</span>
      </div>
    </td>
    <td
      className="text-sm font-light
                  px-6 py-4 whitespace-nowrap"
    >
      <small className="flex justify-start items-center space-x-1">
        <FaEthereum />
        <span className="text-gray-700 font-medium">{backer.contribution} ETH</span>
      </small>
    </td>
    <td
      className="text-sm font-light
      px-6 py-4 whitespace-nowrap"
    >
      {backer.refunded ? "Yes" : "No"}
    </td>
    <td
      className="text-sm font-light
      px-6 py-4 whitespace-nowrap"
    >
      <Moment fromNow>{backer.timestamp}</Moment>
    </td>
  </tr>
);

export default ProjectBackers;
 */

/* import { FaEthereum } from "react-icons/fa";
import { createAvatar } from "@dicebear/identicon";
import Moment from "react-moment";
import { truncate } from "../../store";

const ProjectBackers = ({ backers }) => {
  return (
    <div className="flex flex-col justify-center items-start md:w-2/3 px-6 mx-auto">
      <div
        className="max-h-[calc(100vh_-_25rem)] overflow-y-auto
        shadow-md rounded-md w-full mb-10"
      >
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Backer
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Donations
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Refunded
              </th>
              <th
                scope="col"
                className="text-sm font-medium
                px-6 py-4 text-left"
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {backers.map((backer, i) => (
              <Backer key={i} backer={backer} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Backer = ({ backer }) => {
  // Generate Identicon
  const avatar = createAvatar({}, backer.owner).toDataUriSync();

  return (
    <tr className="border-b border-gray-200">
      <td
        className="text-sm font-light
        px-6 py-4 whitespace-nowrap"
      >
        <div className="flex justify-start items-center space-x-2">
          <img
            className="h-10 w-10 object-contain rounded-full shadow-md"
            src={avatar}
            alt="User Identicon"
          />
          <span>{truncate(backer.owner, 4, 4, 11)}</span>
        </div>
      </td>
      <td
        className="text-sm font-light
                    px-6 py-4 whitespace-nowrap"
      >
        <small className="flex justify-start items-center space-x-1">
          <FaEthereum />
          <span className="text-gray-700 font-medium">{backer.contribution} ETH</span>
        </small>
      </td>
      <td
        className="text-sm font-light
        px-6 py-4 whitespace-nowrap"
      >
        {backer.refunded ? "Yes" : "No"}
      </td>
      <td
        className="text-sm font-light
        px-6 py-4 whitespace-nowrap"
      >
        <Moment fromNow>{backer.timestamp}</Moment>
      </td>
    </tr>
  );
};

export default ProjectBackers;
 */
import { FaEthereum } from "react-icons/fa";
import { createAvatar } from "@dicebear/core"; // ✅ Correct import
import * as identicon from "@dicebear/identicon"; // ✅ Correct import
import { truncate } from "../../store";

const ProjectBackers = ({ backers }) => {
  return (
    <div className="flex flex-col justify-center items-start md:w-2/3 px-6 mx-auto">
      <div className="max-h-[calc(100vh_-_25rem)] overflow-y-auto shadow-md rounded-md w-full mb-10">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th className="text-sm font-medium px-6 py-4 text-left">Backer</th>
              <th className="text-sm font-medium px-6 py-4 text-left">Donations</th>
              <th className="text-sm font-medium px-6 py-4 text-left">Refunded</th>
              <th className="text-sm font-medium px-6 py-4 text-left">Time</th>
            </tr>
          </thead>
          <tbody>
            {backers.map((backer, i) => (
              <Backer key={i} backer={backer} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const Backer = ({ backer }) => {
  // ✅ Fixed Identicon generation
  const avatar = createAvatar(identicon.identicon, { seed: backer.owner }).toDataUriSync();

  // Format Time (Native JS)
  const formattedTime = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  }).format(new Date(backer.timestamp * 1000)); // Convert UNIX timestamp

  return (
    <tr className="border-b border-gray-200">
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
        <div className="flex justify-start items-center space-x-2">
          <img className="h-10 w-10 object-contain rounded-full shadow-md" src={avatar} alt="User Identicon" />
          <span>{truncate(backer.owner, 4, 4, 11)}</span>
        </div>
      </td>
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
        <small className="flex justify-start items-center space-x-1">
          <FaEthereum />
          <span className="text-gray-700 font-medium">{backer.contribution} ETH</span>
        </small>
      </td>
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
        {backer.refunded ? "Yes" : "No"}
      </td>
      <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
        <small>{formattedTime}</small>
      </td>
    </tr>
  );
};

export default ProjectBackers;
