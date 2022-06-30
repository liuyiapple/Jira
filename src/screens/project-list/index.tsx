import { SearchPanel } from "./search-panel";
import { List } from "./list";
import { useEffect, useState } from "react";
import qs from "qs";
import { cleanObject, useMount, useDebounce } from "../../utils";
import { useHttp } from "../../utils/http";
import styled from "@emotion/styled";
// const apiUrl = process.env.REACT_APP_API_URL;
const ProjectList = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [users, setUsers] = useState([]);
  const debounceParam = useDebounce(param, 3000);

  // 使用constomhook
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject(debounceParam) }).then(setList);
    // fetch(
    //   `${apiUrl}/projects?${qs.stringify(cleanObject(debounceParam))}`
    // ).then(async (response) => {
    //   if (response.ok) {
    //     setList(await response.json());
    //   }
    // });
  }, [debounceParam]);

  useMount(() => {
    client("users").then(setUsers);
    // fetch(`${apiUrl}/users`).then(async (response) => {
    //   if (response.ok) {
    //     setUsers(await response.json());
    //   }
    // });
  });
  return (
    <Conteiner>
      <h1>项目列表</h1>
      <SearchPanel users={users} param={param} setParam={setParam} />
      <List list={list} users={users} />
    </Conteiner>
  );
};

const Conteiner = styled.div`
  padding: 3.2rem;
`;

export default ProjectList;
