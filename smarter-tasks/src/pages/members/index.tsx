import { Suspense } from "react";
import MemberList from "./MemberList";
import NewMember from "./NewMember";
import ErrorBoundary from "../../components/ErrorBoundary";

const Members = () => {
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight">Members</h2>
        <NewMember />
      </div>
      <Suspense fallback={<div className="suspense-loading">Loading...</div>}>
        <ErrorBoundary>
          <MemberList />
        </ErrorBoundary>
      </Suspense>
    </>
  );
};
export default Members;
