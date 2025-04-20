"use client";

import { useRouter } from "next/navigation";
import UserDetailsContent from "../../../../../../components/user-profile/UserDetailsContent";
import UserProfileHeader from "../../../../../../components/user-profile/UserProfileHeader";
import styles from "./style.module.scss";

interface UserProfilePageProps {
  params: {
    id: string;
  };
}

export default function UserProfilePage({ params }: UserProfilePageProps) {
  const { id } = params;

  const router = useRouter();

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "20px" }}>
        <button
          onClick={() => router.back()}
          style={{
            color: "#545F7D",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "14px",
          }}
        >
          ← Back to Users
        </button>
      </div>

      <div className={styles.actionContainer}>
        <strong>User Details</strong>
        <div className={styles.buttonsContainer}>
          <button type="button" className="">
            BLACKLIST USER
          </button>
          <button type="button" className="">
            ACTIVATE USER
          </button>
        </div>
      </div>
      <UserProfileHeader userId={id} />
      <UserDetailsContent userId={id} />
    </div>
  );
}
