import styles from './styles.module.css'

export const metadata = {
  title: 'About Page',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  <>
    <nav>About Navbar</nav>
    <main className={styles.main}>{children}</main>
  </>
    )
}