import React from 'react'

function DropDown() {
    return (
        // Dropdown left-side
        <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
            </a>

            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Name of top coin</a></li>
                <li><a class="dropdown-item" href="#">coin 2 </a></li>
                <li><a class="dropdown-item" href="#">coin 3</a></li>
                <li><a class="dropdown-item" href="#">coin 4</a></li>
                <li><a class="dropdown-item" href="#">coin 5</a></li>
                <li><a class="dropdown-item" href="#">coin 6</a></li>
                <li><a class="dropdown-item" href="#">coin 7</a></li>
                <li><a class="dropdown-item" href="#">coin 8 </a></li>
                <li><a class="dropdown-item" href="#">coin 9</a></li>
                <li><a class="dropdown-item" href="#">coin 10</a></li>
            </ul>
        </div>

        // Dropdown right-side
        <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
            </a>

            <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Name of top coin</a></li>
                <li><a class="dropdown-item" href="#">coin 2 </a></li>
                <li><a class="dropdown-item" href="#">coin 3</a></li>
                <li><a class="dropdown-item" href="#">coin 4</a></li>
                <li><a class="dropdown-item" href="#">coin 5</a></li>
                <li><a class="dropdown-item" href="#">coin 6</a></li>
                <li><a class="dropdown-item" href="#">coin 7</a></li>
                <li><a class="dropdown-item" href="#">coin 8 </a></li>
                <li><a class="dropdown-item" href="#">coin 9</a></li>
                <li><a class="dropdown-item" href="#">coin 10</a></li>
        </ul>
        </div>

    )
}

export default DropDown