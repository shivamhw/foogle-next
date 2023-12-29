import { FoogleMovieResponse } from "@/types/foogle";

export function FileBox({ file }: { file: FoogleMovieResponse }) {
    return (
        <div style={
            {
                display: "flex",
                flexDirection: "column"
            }
        }>
            name: <a href={file.cf_worker_link}>{file.name}</a>
            size: {file.size}
        </div>
    )
}