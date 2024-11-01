// 2- Artık bir bileşen prop alıyorsa mutlaka o bileşene gelen propların tipini tanımlamak zorundayız.

type PropsType = {
    count: number;
};

const Display = ({count}:PropsType) => {
  return (
    <div>
      {count}
    </div>
  )
}

export default Display;
