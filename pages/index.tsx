import Head from "next/head";
import { Inter } from "next/font/google";
import Nav from "@/src/Component/Nav";
import React, { useEffect, useState } from "react";
import Header from "@/src/Component/Header";
import TransactionDisplay from "@/src/Content/TransactionDisplay";
import { EmptyState } from "@/src/Component/EmptyState";
import { useQuery } from "react-query";
import { fetcher } from "@/src/api/helpers";
import { User, WalletInterface, transactionsInterface } from "@/src/api/types";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [filter, setFilter] = useState([{ naem: "" }]);
  const { data: user } = useQuery<User>({
    queryFn: fetcher("user", "get"),
    queryKey: "user",
  });

  const { data: transactions } = useQuery({
    queryFn: fetcher("transactions", "get"),
    queryKey: "transactions",
  });

  const { data: wallet } = useQuery({
    queryFn: fetcher("wallet", "get"),
    queryKey: "wallet",
  });

  return (
    <>
      <Head>
        <title>Main Stack Test</title>
      </Head>
      <main
        style={{
          padding: "16px",
        }}
      >
        <Nav user={user as User} />
        <Header
          wallet={wallet as unknown as WalletInterface}
          transactions={transactions as unknown as transactionsInterface}
        />

        <TransactionDisplay
          transactions={transactions as transactionsInterface[]}
        />
      </main>
    </>
  );
}
