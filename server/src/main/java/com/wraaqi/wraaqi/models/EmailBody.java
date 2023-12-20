package com.wraaqi.wraaqi.models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailBody {
    private String to;
    private String subject;
    private String message;
}
