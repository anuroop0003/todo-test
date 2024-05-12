import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  CreateTodos,
  DeleteTodos,
  ListTodos,
  UpdateTodos,
} from "./todosFunctions";

export const useListOpenTodos = () =>
  useQuery({
    queryKey: ["listOpenTodos"],
    queryFn: () => ListTodos({ status: 0 }),
  });

export const useListInprogressTodos = () =>
  useQuery({
    queryKey: ["listInprogressTodos"],
    queryFn: () => ListTodos({ status: 1 }),
  });

export const useListDoneTodos = () =>
  useQuery({
    queryKey: ["listDoneTodos"],
    queryFn: () => ListTodos({ status: 2 }),
  });

export const useDeleteTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => DeleteTodos(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["listOpenTodos"],
      });
      queryClient.invalidateQueries({
        queryKey: ["listInprogressTodos"],
      });
      queryClient.invalidateQueries({
        queryKey: ["listDoneTodos"],
      });
    },
  });
};

export const useCreateTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => CreateTodos(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["listOpenTodos"],
      });
    },
  });
};

export const useUpdateTodos = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data) => UpdateTodos(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["listOpenTodos"],
      });
      queryClient.invalidateQueries({
        queryKey: ["listInprogressTodos"],
      });
      queryClient.invalidateQueries({
        queryKey: ["listDoneTodos"],
      });
    },
  });
};
