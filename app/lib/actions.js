// Actions file for data handling
"use server";

import { revalidatePath, redirect } from "next/cache";

const { default: axios } = require("axios");
const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const addTodo = async (formData) => {
  const rawFormData = {
    title: formData.get("title"),
    status: formData.get("status"),
  };
  try {
    const response = await axios.post(
      "https://jsonplaceholder.typicode.com/todos/api/todos",
      {
        title: rawFormData.title,
        completed: rawFormData.status,
      },
      {
        method: "POST",
        "Content-Type": "application/json",
      }
    );

    const data = await response.data;
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }

  redirect("/dashboard/todos");
};
