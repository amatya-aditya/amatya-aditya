

        color: blue, red, green, yellow

        {% if item.video %}    
                                    <video autoplay loop muted playsinline >
                                        <source src="{{item.video | relative_url}}" alt="{{item.title}}" />
                                            Your browser does not support the video tag.
                                    </video>

                                    {% else %}

                                    <img src="{{item.image | relative_url}}" alt="{{item.title}}" />

                                    {% endif %}