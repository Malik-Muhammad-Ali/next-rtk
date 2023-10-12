import Image from 'next/image'
import styles from './page.module.css'
import AddUser from '@/Components/AddUser'
import DisplayUser from '@/Components/DisplayUser'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Link href='/todos'>Todo List</Link>
    <Link href='/apiusers'>Api Users</Link>
      <AddUser />
      <DisplayUser />
    </>
  )
}
