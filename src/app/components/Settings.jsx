function General() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">General Settings</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="site-name" className="block mb-1">
            Site Name
          </label>
          <input
            type="text"
            id="site-name"
            className="w-full p-2 border rounded"
            defaultValue="My Awesome App"
          />
        </div>
        <div>
          <label htmlFor="timezone" className="block mb-1">
            Timezone
          </label>
          <select id="timezone" className="w-full p-2 border rounded">
            <option>UTC</option>
            <option>EST</option>
            <option>PST</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

function Security() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Security Settings</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="current-password" className="block mb-1">
            Current Password
          </label>
          <input
            type="password"
            id="current-password"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="new-password" className="block mb-1">
            New Password
          </label>
          <input
            type="password"
            id="new-password"
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirm-password"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Change Password
        </button>
      </form>
    </div>
  );
}

function Notifications() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Notification Settings</h2>
      <form className="space-y-4">
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Email Notifications
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            Push Notifications
          </label>
        </div>
        <div>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            SMS Notifications
          </label>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Save Preferences
        </button>
      </form>
    </div>
  );
}

export { General, Security, Notifications };
