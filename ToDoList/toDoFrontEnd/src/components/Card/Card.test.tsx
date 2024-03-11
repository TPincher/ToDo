import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import Card from "./Card";
import { BrowserRouter } from "react-router-dom";

interface testTask {
  id: number;
  content: string;
}

const tasks = [
  {
    id: 23,
    content: "Complete project",
  },
  {
    id: 24,
    content: "Create CodeWars account",
  },
  {
    id: 28,
    content: "Select next project",
  },
  {
    id: 31,
    content: "Take a break",
  },
];
const rendered = render(
  <BrowserRouter>
    {tasks &&
      tasks.map((task: testTask, id: number) => {
        return (
          <>
            <li>
              <Card key={id} content={task.content} />
            </li>
          </>
        );
      })}
  </BrowserRouter>
);

describe("Task List", () => {
  it("should display all tasks", () => {
    const task1 = rendered.getByText("Complete project");
    expect(task1).toBeDefined();
    const task2 = rendered.getByText("Create CodeWars account");
    expect(task2).toBeDefined();
    const task3 = rendered.getByText("Select next project");
    expect(task3).toBeDefined();
    const task4 = rendered.getByText("Take a break");
    expect(task4).toBeDefined();
  });
});
