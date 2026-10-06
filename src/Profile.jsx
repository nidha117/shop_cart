import { useState } from "react";

function Profile() {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState(
    localStorage.getItem("profileName") || "Kadeeja Nidha"
  );

  const [email, setEmail] = useState(
    localStorage.getItem("profileEmail") || "nidha@example.com"
  );

  const [phone, setPhone] = useState(
    localStorage.getItem("profilePhone") || "+91 XXXXX XXXXX"
  );

  const [location, setLocation] = useState(
    localStorage.getItem("profileLocation") || "Kerala, India"
  );

  return (
    <div className="min-h-screen bg-gray-100 py-10">

      <div className="max-w-3xl mx-auto px-6">

        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          My Profile
        </h1>

        <div className="bg-white rounded-2xl shadow-sm p-8">

          {/* Profile */}
          <div className="flex items-center gap-5 border-b pb-6">

            <div className="w-20 h-20 rounded-full bg-[#064e3b] text-white flex items-center justify-center text-2xl font-bold">
              KN
            </div>

            <div>
              <h2 className="text-xl font-semibold">
                {name}
              </h2>

              <p className="text-gray-500 mt-1">
                {email}
              </p>
            </div>

          </div>

          {/* Personal Information */}
          <div className="mt-7">

            <h3 className="text-lg font-semibold mb-5">
              Personal Information
            </h3>

          <div className="flex flex-col gap-5">

              {/* Full Name */}
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Full Name
                </p>

                {isEditing ? (
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                ) : (
                  <p className="font-medium">
                    {name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Email
                </p>

                {isEditing ? (
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                ) : (
                  <p className="font-medium">
                    {email}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Phone
                </p>

                {isEditing ? (
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                ) : (
                  <p className="font-medium">
                    {phone}
                  </p>
                )}
              </div>

              {/* Location */}
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Location
                </p>

                {isEditing ? (
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="border rounded-lg px-3 py-2 w-full"
                  />
                ) : (
                  <p className="font-medium">
                    {location}
                  </p>
                )}
              </div>

            </div>
          </div>

          {/* Buttons */}
          <div className="mt-8">

            {isEditing ? (
              <div className="flex gap-3">

                <button
                  onClick={() => {
                    localStorage.setItem("profileName", name);
                    localStorage.setItem("profileEmail", email);
                    localStorage.setItem("profilePhone", phone);
                    localStorage.setItem("profileLocation", location);

                    setIsEditing(false);
                  }}
                  className="bg-[#064e3b] text-white px-6 py-2.5 rounded-full"
                >
                  Save Changes
                </button>

                <button
                  onClick={() => setIsEditing(false)}
                  className="border border-gray-300 px-6 py-2.5 rounded-full"
                >
                  Cancel
                </button>

              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="bg-[#064e3b] text-white px-6 py-2.5 rounded-full"
              >
                Edit Profile
              </button>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default Profile;