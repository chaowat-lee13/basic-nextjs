import { useRouter } from 'next/router';

const ClientProjectPage = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    // load data...
    router.push({
      pathname: '/clients/[id]/[clientprojectid]',
      query: { id: 'lee', clientprojectid: 'projecta' },
    });
  };

  return (
    <div>
      <h1>Client Project Page</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectPage;
