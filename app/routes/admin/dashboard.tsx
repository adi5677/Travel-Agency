// Update the import path to the correct location where Header is exported
import { Header } from "../../../components/Header";

const dashboard = () => {

  const user = {
    name: 'Aditya'
  }


  return (
        <main className="dashboard wrapper">
            <Header
                title={`Welcome ${user?.name ?? 'Guest'} 👋`}
                description="Track activity, trends and popular destinations in real time"
            />

      Dashboard Page Contents
    </main>
  )
}

export default dashboard