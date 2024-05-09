import React from 'react'
import { Link } from 'react-router-dom'

export function LateralMenu() {
  return (
    <div class = "row flex-nowrap">
            <div class = " col-sm-1 col-md-2 min-vh-100">
                <div class = "p-2">
                        <ul class="nav nav-tabs flex-column mt-2">
                            <li class="nav-item">
                                <a>
                                    <span class = "fs-5 d-none d-sm-inline">
                                        <Link class='nav-link' to="/user/home"><i class="bi bi-house-fill"></i> Pagina Principal</Link>
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a>
                                    <span class = "fs-5 d-none d-sm-inline">
                                    <Link class='nav-link' to="/explorarcat"><i class="bi bi-grid-fill"></i> Explorar catergorias</Link>
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a>
                                    <span class = "fs-5 d-none d-sm-inline">
                                    <Link class='nav-link' to="/usuarios"><i class="bi bi-person-fill"></i> Usuarios</Link>
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a>
                                    <span class = "fs-5 d-none d-sm-inline">
                                    <Link class='nav-link' to="/explorarcom"><i class="bi bi-people-fill"></i> Explorar comunidades</Link>
                                    </span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a>
                                    <span class = "fs-5 d-none d-sm-inline">
                                    <Link class='nav-link' to="/miscom"><i class="bi bi-list-stars"></i> Mis comunidades</Link>
                                    </span>
                                </a>
                            </li>


                        </ul>
                </div>
            </div>
        </div>
    
  )
}
