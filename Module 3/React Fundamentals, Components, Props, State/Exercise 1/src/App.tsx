type UserProfilePros = {
  name: string;
  role: string;
};

function UserProfile(pros: UserProfilePros) {
  return (
    <div className="card">
      <h1>Tên nhân viên: {pros.name}</h1>
      <p>Chức vụ: {pros.role}</p>
    </div>
  );
}

function App() {
  return (
    <UserProfile name="Nguyễn Văn Minh" role="frontend Developer"></UserProfile>
  );
}

export default App;
