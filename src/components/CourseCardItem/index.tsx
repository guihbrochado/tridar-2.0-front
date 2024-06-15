import * as Icon from "@phosphor-icons/react/dist/ssr";

export default function CourseCardItem(title) {
    return (
        <div className="flex flex-row text-gray-light">
            <Icon.BookOpen size={20} className="text-gray-light" />
            <hr className="text-gray-light" />
            <p className="text-gray-light">{title}</p>
        </div>
    );
}
