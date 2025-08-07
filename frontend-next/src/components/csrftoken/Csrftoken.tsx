"use client";

import useCsrfToken from "@/features/auth/hooks/useCsrfToken";

function Csrftoken() {
    const token = useCsrfToken();
    return (
        <div>
            {/* {token || "取得中..."} */}
        </div>
    )
}
 
export default Csrftoken;