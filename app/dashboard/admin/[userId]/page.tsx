import AnnouncementCard from "@/components/common/admin/AnnouncementCard";
import AdminDashboardHero from "@/components/dashboard/admin/AdminDashboardHero";
import { getUserFromToken } from "@/lib/auth/getAuthUser";
import { getAnnouncementsByUser } from "@/queries/announcement";
import { AnnouncementProps } from "@/types/type";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Dashboard",
  description: "This is the admin dashboard page",
};

const AdminPage = async () => {
  const authUser = await getUserFromToken();

  if (authUser?.role !== "admin") {
    notFound();
  }

  const announcement = await getAnnouncementsByUser(
    authUser?.user_id as string,
  );

  if (!announcement) {
    notFound();
  }

  return (
    <>
      <h4 className="font-inter text-base sm:text-xl lg:text-2xl font-semibold">
        <span className="text-green">demo university</span> Document Request
        System
      </h4>

      <div className="w-full mx-auto">
        <div className="mt-4 md:mt-8">
          <AdminDashboardHero />

          <div className="mt-4 md:mt-8 border-t-4 border-t-emerald-500 pt-4 rounded-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 shadow-sm shadow-black/40 py-8 px-4 rounded-md">
              {announcement.map((item) => (
                <AnnouncementCard
                  key={item.id}
                  announcement={item as AnnouncementProps}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
