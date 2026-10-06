function Profile() {
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
                Kadeeja Nidha
              </h2>

              <p className="text-gray-500 mt-1">
                nidha@example.com
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

                <p className="font-medium">
                  Kadeeja Nidha
                </p>
              </div>

              {/* Email */}
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Email
                </p>

                <p className="font-medium">
                  nidha@example.com
                </p>
              </div>

              {/* Phone */}
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Phone
                </p>

                <p className="font-medium">
                  +91 XXXXX XXXXX
                </p>
              </div>

              {/* Location */}
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  Location
                </p>

                <p className="font-medium">
                  Kerala, India
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Profile;