
"use client"
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect } from "react";
import { useQuery, useLazyQuery, gql, useMutation } from '@apollo/client'

const GET_USERS = gql`
  query Query {
    getUsers {
      name
      uid
      pwd
      rollno
      gen
      hobbies
      country
      address
    }
  }
`
const SAVE_USER = gql`
  mutation Mutation($data: StudentsInput) {
    regStudents(data: $data)
  }
`
export default function Home() {

  // const { loading, error, data } = useQuery(GET_USERS);
  const [fetchUsers, { loading, error, data }] = useLazyQuery(GET_USERS);
  const [saveUser, { loading: saveUserLoading, error: saveUserError, data: saveUserData }] = useMutation(SAVE_USER);

  useEffect(() => {
    if (!loading) {
      if (data) {
        console.log("success", data)
      }
      if (error) {
        console.log("failute", error)
      }
    }
  }, [loading])

  const getUsers = () => {
    fetchUsers()
  }

  const handleUsers = () => {
    saveUser({
      variables: {

        "data": {
          "address": "address",
          "country": "China",
          "gen": "F",
          "hobbies": "C",
          "name": "u9",
          "pwd": "232322",
          "rollno": "2",
          "uid": "u123@gmail.com"
        }
      }
    })
  }

  return (
    <div>
      <h2>Users</h2>
      <button onClick={getUsers}>get Users</button>
      <button onClick={handleUsers}>save User</button>
    </div>
  );
}
