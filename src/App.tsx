import { useState } from "react";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Sidebar, { type View } from "./components/Sidebar";
import JobSeekerHome from "./components/JobSeekerHome";
import SearchJobs from "./components/SearchJobs";
import SavedJobs from "./components/SavedJobs";
import JobDetail from "./components/JobDetail";
import Profile from "./components/Profile";
import EmployerHome from "./components/EmployerHome";
import CreateJobForm from "./components/CreateJobForm";
import MyJobs from "./components/MyJobs";
import {
  defaultEmployer,
  defaultJobSeeker,
  initialJobs,
  type Job,
  type User,
  type UserType,
} from "./components/jobData";

type AuthView = "login" | "register";

function App() {
  const [authView, setAuthView] = useState<AuthView>("login");
  const [selectedType, setSelectedType] = useState<UserType>("jobSeeker");
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const [activeView, setActiveView] = useState<View>("home");
  const [previousView, setPreviousView] = useState<View>("home");

  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  function handleLogin(type: UserType) {
    if (type === "jobSeeker") {
      setCurrentUser(defaultJobSeeker);
    } else {
      setCurrentUser(defaultEmployer);
    }

    setActiveView("home");
  }

  function handleRegister() {
    if (selectedType === "jobSeeker") {
      setCurrentUser(defaultJobSeeker);
    } else {
      setCurrentUser(defaultEmployer);
    }

    setActiveView("home");
  }

  function handleUpdateUser(updatedUser: User) {
    setCurrentUser(updatedUser);
  }

  function handleLogout() {
    setCurrentUser(null);
    setAuthView("login");
    setActiveView("home");
    setSelectedJob(null);
  }

  function handleSaveJob(job: Job) {
    const alreadySaved = savedJobs.some((savedJob) => savedJob.id === job.id);

    if (!alreadySaved) {
      setSavedJobs([...savedJobs, job]);
    }
  }

  function handleRemoveSaved(jobId: number) {
    const updatedSavedJobs = savedJobs.filter((job) => job.id !== jobId);
    setSavedJobs(updatedSavedJobs);
  }

  function handleViewMore(job: Job) {
    setSelectedJob(job);
    setPreviousView(activeView);
    setActiveView("detail");
  }

  function handleBackFromDetail() {
    setActiveView(previousView);
    setSelectedJob(null);
  }

  function handleCreateJob(newJob: Job) {
    setJobs([newJob, ...jobs]);
    setActiveView("myJobs");
  }

  function handleDeleteJob(jobId: number) {
    const updatedJobs = jobs.filter((job) => job.id !== jobId);
    setJobs(updatedJobs);

    const updatedSavedJobs = savedJobs.filter((job) => job.id !== jobId);
    setSavedJobs(updatedSavedJobs);

    if (selectedJob?.id === jobId) {
      setSelectedJob(null);
      setActiveView("myJobs");
    }
  }

  function handleChangeJobStatus(jobId: number, status: Job["status"]) {
    const updatedJobs = jobs.map((job) =>
      job.id === jobId ? { ...job, status } : job
    );

    setJobs(updatedJobs);

    const updatedSavedJobs = savedJobs.map((job) =>
      job.id === jobId ? { ...job, status } : job
    );

    setSavedJobs(updatedSavedJobs);

    if (selectedJob?.id === jobId) {
      setSelectedJob({ ...selectedJob, status });
    }
  }

  if (!currentUser) {
    if (authView === "login") {
      return (
        <LoginForm
          onLogin={handleLogin}
          onGoToRegister={() => setAuthView("register")}
        />
      );
    }

    return (
      <RegisterForm
        selectedType={selectedType}
        onSelectType={setSelectedType}
        onRegister={handleRegister}
        onGoToLogin={() => setAuthView("login")}
      />
    );
  }

  return (
    <main className="min-h-screen flex bg-white">
      <Sidebar
        userType={currentUser.type}
        activeView={activeView}
        onChangeView={setActiveView}
        onLogout={handleLogout}
      />

      {currentUser.type === "jobSeeker" && activeView === "home" && (
        <JobSeekerHome
          user={currentUser}
          jobs={jobs}
          savedJobs={savedJobs}
          onViewMore={handleViewMore}
          onSaveJob={handleSaveJob}
        />
      )}

      {currentUser.type === "jobSeeker" && activeView === "search" && (
        <SearchJobs
          jobs={jobs}
          savedJobs={savedJobs}
          onViewMore={handleViewMore}
          onSaveJob={handleSaveJob}
        />
      )}

      {currentUser.type === "jobSeeker" && activeView === "saved" && (
        <SavedJobs
          savedJobs={savedJobs}
          onViewMore={handleViewMore}
          onRemoveSaved={handleRemoveSaved}
        />
      )}

      {activeView === "detail" && (
        <JobDetail
          job={selectedJob}
          userType={currentUser.type}
          onBack={handleBackFromDetail}
        />
      )}

      {activeView === "profile" && (
        <Profile user={currentUser} onUpdateUser={handleUpdateUser} />
      )}

      {currentUser.type === "employer" && activeView === "home" && (
        <EmployerHome
          user={currentUser}
          jobs={jobs}
          onViewMore={handleViewMore}
        />
      )}

      {currentUser.type === "employer" && activeView === "createJob" && (
        <CreateJobForm
          onCreateJob={handleCreateJob}
          onCancel={() => setActiveView("home")}
        />
      )}

      {currentUser.type === "employer" && activeView === "myJobs" && (
        <MyJobs
          jobs={jobs}
          onViewMore={handleViewMore}
          onDeleteJob={handleDeleteJob}
          onChangeStatus={handleChangeJobStatus}
        />
      )}
    </main>
  );
}

export default App;