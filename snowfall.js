@keyframes snowfall {
    0% { transform: translateY(-10px); opacity: 1; }
    100% { transform: translateY(100vh); opacity: 0; }
}

.background::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('snowflake.png'); /* Add a transparent snowflake image */
    background-size: contain;
    animation: snowfall 10s infinite linear;
}
