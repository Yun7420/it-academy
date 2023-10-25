export default function FilterButton({ name, isPressed, setFilter }) {
    return (
        <button className="border-2 border-black p-1 font-semibold disabled:bg-black disabled:text-white"
        disabled={isPressed}
        // filter를 현재 버튼의 name으로 업데이트한다.
        onClick={() => setFilter(name)}>
            {name}
        </button>
    )
}