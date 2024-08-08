
import Table from "./components/table/Table";
import "./pageHome.scss";

export default function Home() {
  return (
    <div className="home">
      <div className="home__tables">
        <Table numberHome={1} />
        <Table numberHome={2} />
        <Table numberHome={3} />
        <Table numberHome={4} />
      </div>
    </div>
  );
}
