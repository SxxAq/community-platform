import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/AuthContext.tsx";

interface SettingsFormData {
  email: string;
  password: string;
  confirmPassword: string;
  notifications: boolean;
}

const UserSettings: React.FC = () => {
  const { user, updateUser } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<SettingsFormData>({
    defaultValues: {
      email: user?.email || "",
      notifications: true,
    },
  });

  const onSubmit = async (data: SettingsFormData) => {
    try {
      await updateUser(data);
      // Show success message
    } catch (error) {
      console.error("Failed to update settings:", error);
      // Show error message
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        User Settings
      </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            New Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100"
            {...register("password", {
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          {errors.password && (
            <p className="mt-1 text-sm text-red-600">
              {errors.password.message}
            </p>
          )}
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
          >
            Confirm New Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-gray-100"
            {...register("confirmPassword", {
              validate: (val: string) => {
                if (watch("password") !== val) {
                  return "Your passwords do not match";
                }
              },
            })}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-600">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="notifications"
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded dark:bg-gray-900"
            {...register("notifications")}
          />
          <label
            htmlFor="notifications"
            className="ml-2 block text-sm text-gray-900 dark:text-gray-100"
          >
            Receive email notifications
          </label>
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
        >
          Save Settings
        </button>
      </form>
    </div>
  );
};

export default UserSettings;
