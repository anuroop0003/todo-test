export default function PrioritySorter({ priority }) {
  switch (true) {
    case priority === 0:
      return (
        <span className="bg-low_priority_container text-low_priority_text font-medium text-[8px] px-1.5 py-1 rounded-sm">
          low priority
        </span>
      );
    case priority === 1:
      return (
        <span className="bg-medium_priority_container text-medium_priority_text font-medium text-[8px] px-1.5 py-1 rounded-sm">
          medium priority
        </span>
      );
    case priority === 2:
      return (
        <span className="bg-high_priority_container text-high_priority_text font-medium text-[8px] px-1.5 py-1 rounded-sm">
          high priority
        </span>
      );
    case priority === 3:
      return (
        <span className="bg-highest_priority_container text-highest_priority_text font-medium text-[8px] px-1.5 py-1 rounded-sm">
          highest priority
        </span>
      );
    default:
      return (
        <span className="bg-low_priority_container text-low_priority_text font-medium text-[8px] px-1.5 py-1 rounded-sm">
          no priority
        </span>
      );
  }
}
