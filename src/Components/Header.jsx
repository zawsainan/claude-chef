import chefIcon from "../assets/chef.png";
export default function Header() {
  return (
    <div className="flex gap-3 items-center justify-center py-4 bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
      <img src={chefIcon} alt="Chef Claude logo" className="w-10" />
      <h3>Chef Claude</h3>
    </div>
  );
}
